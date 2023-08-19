package com.watchilderen.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByName(String name);

    @Query("SELECT u.deviceToken FROM User u")
    List<String> findAllDeviceTokens();
}
