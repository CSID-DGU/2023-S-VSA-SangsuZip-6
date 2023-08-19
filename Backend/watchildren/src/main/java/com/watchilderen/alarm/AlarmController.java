package com.watchilderen.alarm;

import com.watchilderen.response.CommonResult;
import com.watchilderen.response.ResponseService;
import com.watchilderen.user.User;
import com.watchilderen.user.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;



@RestController
@RequestMapping("/alarm")
@RequiredArgsConstructor
public class AlarmController {

    private final AlarmService alarmService;
    private final ResponseService responseService;
    private final UserService userService;

    @GetMapping("/push")
    public CommonResult pushAlarm () throws Exception {
        int fail = alarmService.sendPushNotifications();
        if (fail != 0)
            return responseService.getCommonResult(500,"Push Alarm Serve Fail"+ "Count : " + fail);
        return responseService.getCommonResult(200,"Push Alarm Serve Succeed");
    }

}
