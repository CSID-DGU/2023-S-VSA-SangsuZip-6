package com.watchilderen.user;

import lombok.Data;

@Data
public class LoginUserRequest {
    private String id;
    private String pw;
}
