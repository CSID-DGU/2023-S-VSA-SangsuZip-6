package com.watchilderen.user;

public interface UserService {
    public String insertUser (User user) throws Exception;
    public User getUser (String id) throws Exception;
    public String getUserToken (String id) throws Exception;
}

