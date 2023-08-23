package com.watchilderen.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String saveUser (User user){
        userRepository.save(user);
        return user.getId();
    }

    public Optional<User> findById(String id) {
        Optional<User> user = userRepository.findById(id);
        return user;
    }

    public List<String> getAllDeviceTokens (){
        List<String> deviceTokens = userRepository.findAllDeviceTokens()
                .stream()
                .filter(deviceToken -> deviceToken != null) // 필터링: null 값을 제외
                .collect(Collectors.toList());
        return deviceTokens;
    }
}

