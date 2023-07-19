package com.ssafy.oho.model.repository.mainDB;

import com.ssafy.oho.model.entity.mainDB.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room,Integer> {
    Room findById(long roomId);
    boolean existsById(long roomId);
}