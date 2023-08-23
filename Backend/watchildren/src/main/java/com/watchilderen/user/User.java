package com.watchilderen.user;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @Column(name="id")
    private String id;

    @Column(name="pw")
    private String pw;

    @Column(name="name")
    private String name;

    @Column(name="deviceToken")
    private String deviceToken;

}
