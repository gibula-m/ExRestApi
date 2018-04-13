package pl.bakkchos.walli.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.bakkchos.walli.entity.GroupEntity;
import pl.bakkchos.walli.entity.UserEntity;
import pl.bakkchos.walli.repository.GroupRepository;

import java.util.ArrayList;

@RestController
@RequestMapping(value = "group")
@CrossOrigin
public class GroupController {

    @Autowired
    GroupRepository gr;

    @RequestMapping(value = "list")
    public ArrayList<GroupEntity> listGroups() {
        return gr.findAllByNameNotNull();
    }

    @RequestMapping("add")
    public void addGroup(@RequestBody GroupEntity group) {
        gr.save(group);

    }
    @RequestMapping("/delete/{id}")
    public void deleteGroup(@PathVariable Integer id) {
        gr.removeById(id);
    }

    @RequestMapping("/modify")
    public void modifyGroup(@RequestBody GroupEntity group) {
        gr.editUser(group.getName(),group.getUsers(),group.getId());
    }

    @RequestMapping("/byid/{id}")
    public GroupEntity byIdGroup(@PathVariable Integer id) {
        return gr.findById(id);
    }


}
