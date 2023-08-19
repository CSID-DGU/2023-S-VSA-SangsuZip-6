package com.watchilderen.user;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service
public class UserServiceImpl implements UserService{
    public static final String COLLECTION_NAME = "User";
    @Override
    public String insertUser(User user) throws Exception{
        Firestore firestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> apiFuture = firestore.collection(COLLECTION_NAME).document(user.getId()).set(user);
        return apiFuture.get().getUpdateTime().toString();
    }

    @Override
    public User getUser(String id) throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();
        DocumentReference dr = firestore.collection(COLLECTION_NAME).document(id);
        ApiFuture<DocumentSnapshot> apiFuture = dr.get();
        DocumentSnapshot ds = apiFuture.get();
        if(ds.exists()) return ds.toObject(User.class);
        else return null;
    }

    @Override
    public String getUserToken(String id) throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();
        DocumentReference dr = firestore.collection(COLLECTION_NAME).document(id);
        ApiFuture<DocumentSnapshot> apiFuture = dr.get();
        DocumentSnapshot ds = apiFuture.get();
        if(ds.exists()) return ds.toObject(User.class).getDeviceToken();
        else return null;
    }

    @Override
    public List<String> getAllDeviceTokens() throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();
        CollectionReference usersCollection = firestore.collection(COLLECTION_NAME);

        List<String> deviceTokens = new ArrayList<>();

        ApiFuture<QuerySnapshot> future = usersCollection.get();
        List<QueryDocumentSnapshot> documents = future.get(10, TimeUnit.SECONDS).getDocuments();

        for (QueryDocumentSnapshot document : documents) {
            if (document.contains("deviceToken")) {
                String deviceToken = document.getString("deviceToken");
                deviceTokens.add(deviceToken);
            }
        }

        return deviceTokens;
    }
}
