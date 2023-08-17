package com.watchilderen.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class User {

    private String id;
    private String pw;
    private String name;
    private String deviceToken;
    private LocalDateTime create_dt;
    private LocalDateTime update_dt;

}
