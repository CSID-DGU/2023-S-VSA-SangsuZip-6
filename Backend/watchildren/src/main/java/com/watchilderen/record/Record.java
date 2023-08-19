package com.watchilderen.record;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;


@Getter
@Setter
@NoArgsConstructor
public class Record {
    private Long id;
    private LocalDateTime date;
    private boolean isChecked;
    private String adminName;
}
