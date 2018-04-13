package pl.bakkchos.walli.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;
import pl.bakkchos.walli.entity.UserEntity;

import java.util.ArrayList;

public interface UserRepository extends CrudRepository<UserEntity, Long> {

    UserEntity findByName(String username);
    ArrayList<UserEntity> findAllByDateNotNull();
    @Transactional
    void removeByNickname(String nickname);
    UserEntity findById(Integer id);

    @Modifying
    @Transactional
    @Query(value = "UPDATE UserEntity u SET u.nickname=?1,u.name=?2,u.surname=?3,u.password=?4,u.groups=?5 WHERE u.id = ?6")
    void editUser(String nickname,String name,String surname,String password,String groups,Integer ID);

}