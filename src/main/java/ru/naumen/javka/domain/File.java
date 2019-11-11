package ru.naumen.javka.domain;

import javax.persistence.*;

@Entity
@Table(name = "files")
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String path;

    private long creator;

    private String description;

    public File(String name, String path, String description, long creator) {
        this.name = name;
        this.path = path;
        this.description = description;
        this.creator = creator;
    }

    private Long parentId;

    public File() {

    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPath() {
        return path;
    }

    public String getDescription() {
        return description;
    }

    public Long getCreator() {
        return creator;
    }

    public long getParentId() {
        return parentId;
    }
}