package pl.bakkchos.walli.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;
import pl.bakkchos.walli.entity.GroupEntity;
import pl.bakkchos.walli.entity.UserEntity;

import java.util.ArrayList;

public interface GroupRepository extends CrudRepository<GroupEntity, Long> {

    GroupEntity findByName(String username);
    ArrayList<GroupEntity> findAllByNameNotNull();
    @Transactional
    void removeById(Integer id);
    GroupEntity findById(Integer id);

    @Modifying
    @Transactional
    @Query(value = "UPDATE GroupEntity g SET g.name=?1,g.users=?2 WHERE g.id = ?3")
    void editUser(String name,String users,Integer ID);

}