package pl.bakkchos.walli.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.bakkchos.walli.entity.GroupEntity;
import pl.bakkchos.walli.entity.UserEntity;
import pl.bakkchos.walli.repository.UserRepository;
import pl.bakkchos.walli.util.User;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "user")
@CrossOrigin
public class UserController {

    @Autowired
    UserRepository ur;

    @RequestMapping(value = "list")
    public ArrayList<UserEntity> listUsers() {
        return ur.findAllByDateNotNull();
    }

    @RequestMapping(value = "add",method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public void addUser(@RequestBody UserEntity user) {
        ur.save(user);

    }
    @RequestMapping("/delete/{username}")
    public void deleteUser(@PathVariable String username) {
        ur.removeByNickname(username);
    }

    @RequestMapping("/modify")
    public void modifyUser(@RequestBody UserEntity user) {
        ur.editUser(user.getNickname(),user.getName(),user.getSurname(),user.getPassword(),user.getGroups(),user.getId());
    }

    @RequestMapping("/byid/{id}")
    public UserEntity byIdUser(@PathVariable Integer id) {
        return ur.findById(id);
    }

}
