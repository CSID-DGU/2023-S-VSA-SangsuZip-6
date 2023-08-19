package com.watchilderen.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class User {

    private String id;
    private String pw;
    private String name;
    private String deviceToken;

}
