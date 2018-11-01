package com.itheima.service;

import com.itheima.domain.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public List<User> findAll();

    public User findOne(Integer id);

    public void update(User user);

}
