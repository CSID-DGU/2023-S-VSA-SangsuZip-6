package com.watchilderen.user;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserServiceImpl implements UserService{
    public static final String COLLECTION_NAME = "User";
    @Override
    public String insertUser(User user) throws Exception{
        Firestore firestore = FirestoreClient.getFirestore();
        user.setCreate_dt(LocalDateTime.now());
        user.setUpdate_dt(LocalDateTime.now());
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
}
