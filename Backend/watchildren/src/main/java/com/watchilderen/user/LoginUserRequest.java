package com.watchilderen.user;

import lombok.Data;

@Data
public class LoginUserRequest {
    private Long id;
    private String pw;
}
