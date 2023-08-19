package com.watchilderen.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Long saveUser (User user){
        userRepository.save(user);
        return user.getId();
    }

    public Optional<User> findById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user;
    }

    public List<String> getAllDeviceTokens (){
        return userRepository.findAllDeviceTokens();
    }
}

