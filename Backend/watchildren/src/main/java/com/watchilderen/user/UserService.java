package com.watchilderen.user;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public String insertUser (User user) throws Exception;
    public User getUser (String id) throws Exception;
    public String getUserToken (String id) throws Exception;
    public List<String> getAllDeviceTokens () throws Exception;
}

