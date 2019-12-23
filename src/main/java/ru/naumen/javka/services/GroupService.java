package ru.naumen.javka.services;

import ru.naumen.javka.domain.Group;

import java.util.List;

public interface GroupService {
   Long create(long userId, String name, long[] userIds);

   List<Group> getUserGroups(long userId);
}
