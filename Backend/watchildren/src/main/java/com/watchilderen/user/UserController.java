package com.watchilderen.user;

import com.watchilderen.config.jwt.JwtTokenProvider;
import com.watchilderen.response.CommonResult;
import com.watchilderen.response.ResponseService;
import com.watchilderen.response.SingleResult;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    private final ResponseService responseService;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/signup")
    public CommonResult signup (@RequestBody @Valid User user) throws Exception {
        String result = userService.insertUser(user);
        if (result == null)
            return new CommonResult(500, "Failed Insert User Info");
        return new CommonResult(200, "Succeed Insert User Info");
    }

    @GetMapping("/signin")
    public SingleResult<String> signin (@RequestBody @Valid LoginUserRequest request) throws Exception{
        String id = request.getId();
        User user = userService.getUser(id);

        if(user != null && user.getPw().equals(request.getPw())){
            return responseService.getSingleResult(jwtTokenProvider.createToken(String.valueOf(id)),200,"Login Succeed");
        }
        if(user == null)
            return responseService.getSingleResult("None",403,"Login Failed (Not Found ID)");
        return responseService.getSingleResult(user.getId(),403,"Login Failed (Not equal Password)");
    }


}
