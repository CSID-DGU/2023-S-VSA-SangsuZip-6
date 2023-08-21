package com.watchilderen.user;

import com.watchilderen.config.jwt.JwtTokenProvider;
import com.watchilderen.response.CommonResult;
import com.watchilderen.response.ResponseService;
import com.watchilderen.response.SingleResult;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;


@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    private final ResponseService responseService;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/signup")
    public CommonResult signup (@RequestBody @Valid User user) throws Exception {
        String id = userService.saveUser(user);
        return responseService.getSingleResult(String.valueOf(id), 200, "Succeed Insert User Info");
    }

    @PostMapping("/signin")
    public SingleResult<String> signin (@RequestBody @Valid LoginUserRequest request) throws Exception{
        String id = request.getId();
        Optional<User> user = userService.findById(id);
        if(user.get().getPw().equals(request.getPw())){
            return responseService.getSingleResult(jwtTokenProvider.createToken(String.valueOf(id)),200,"Login Succeed");
        }else if(request.getId().equals(user.get().getId())) return responseService.getSingleResult("None",403,"Login Failed (Not Found ID)");
        else return responseService.getSingleResult(user.get().getId().toString(),403,"Login Failed (Not equal Password)");
    }


}
