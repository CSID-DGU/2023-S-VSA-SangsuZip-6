package com.watchilderen.response;

import org.springframework.stereotype.Service;

@Service
public class ResponseService {

    public <T> SingleResult<T> getSingleResult(T data, int code, String msg) {
        SingleResult<T> result = new SingleResult<>();
        result.setData(data);
        result.setCode(code);
        result.setMessage(msg);
        return result;
    }
    public CommonResult getCommonResult(int code, String msg) {
        CommonResult result = new CommonResult();
        result.setCode(code);
        result.setMessage(msg);
        return result;
    }
}