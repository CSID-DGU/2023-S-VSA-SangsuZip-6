package com.watchilderen.alarm;

import com.watchilderen.user.UserService;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class AlarmService {

    private UserService userService;

    @Autowired
    public AlarmService(UserService userService) {
        this.userService = userService;
    }

    public int sendPushNotifications() throws Exception {
        List<String> recipients = userService.getAllDeviceTokens();
        System.out.println(recipients.get(0));

        // Enable OkHttpClient logger at FINE level
        Logger.getLogger(OkHttpClient.class.getName()).setLevel(Level.FINE);

        OkHttpClient client = new OkHttpClient();
        MediaType mediaType = MediaType.parse("application/json");
        int cnt = 0;
        for (String recipient : recipients) {
            String recipientToken = recipient;
            String requestBody = "{ \"to\": \"" + recipientToken + "\", \"sound\": \"default\"," + "\"title\": \"WatChildren\"," + "\"body\": \"" + "키즈 카페 내 낙상 발생" + "\", \"data\": { } }";
            RequestBody body = RequestBody.create(mediaType, requestBody);

            Request pushRequest = new Request.Builder()
                    .url("https://exp.host/--/api/v2/push/send")
                    .post(body)
                    .addHeader("Content-Type", "application/json")
                    .addHeader("Accept-Encoding", "gzip, deflate")
                    .addHeader("Accept", "*/*")
                    .build();

            Response response = client.newCall(pushRequest).execute();

            if (!response.isSuccessful()) {
                cnt++;
                // Close response body to prevent resource leak
                if (response.body() != null) {
                    response.body().close();
                }
            }
        }

        // Reset OkHttpClient logger level to default (if needed)
        Logger.getLogger(OkHttpClient.class.getName()).setLevel(Level.INFO);

        return cnt;
    }
}
