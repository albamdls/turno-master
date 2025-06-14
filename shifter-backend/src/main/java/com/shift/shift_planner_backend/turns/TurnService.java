package com.shift.shift_planner_backend.turns;
import com.shift.shift_planner_backend.turns.model.Turn;
import com.shift.shift_planner_backend.turns.model.TurnDTO;
import com.shift.shift_planner_backend.turns.model.TurnFilterDTO;
import com.shift.shift_planner_backend.turns.specifications.TurnSpecification;
import com.shift.shift_planner_backend.user.UserRepository;
import com.shift.shift_planner_backend.user.UserService;
import com.shift.shift_planner_backend.user.model.User;
import com.shift.shift_planner_backend.user.model.UserDTO;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.List;

@Service
public class TurnService {

    private final TurnRepository turnRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    public TurnService(TurnRepository turnRepository, UserRepository userRepository, UserService userService)
    {
        this.turnRepository = turnRepository;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    public TurnDTO createTurn (TurnDTO createTurnDTO) {
        turnRepository.findByInitDateAndEndDateAndUserName(
                createTurnDTO.getInitDate(),
                createTurnDTO.getEndDate(),
                createTurnDTO.getUserName()
        ).ifPresent(t -> {
            throw new RuntimeException("Ya existe un turno con esos datos.");
        });


        Turn turnMapped = TurnMapper.toEntity((createTurnDTO));
        Turn saved = turnRepository.save(turnMapped);

        return TurnMapper.toDTO(saved);


    }

    // public List<TurnDTO> createTurnsByGroup(Long groupId, TurnDTO turnData) {
    //     List<UserDTO> usersInGroup = userService.findByGroupId(groupId);
    //     List<Turn> turns = new ArrayList<>();

    //     for (UserDTO user : usersInGroup) {
    //         Turn turn = TurnMapper.toEntity(turnData);
    //         turn.setUserId(user.getId());
    //         turn.setUserName(user.getName());
    //         turn.setGroupId(groupId);
    //         turns.add(turnRepository.save(turn));
    //     }

    //     return turns.stream().map(TurnMapper::toDTO).collect(Collectors.toList());
    // }

    public List<TurnDTO> filterTurns(TurnFilterDTO filter) {
        /*Llama al repositorio con la especificación generada en TurnSpecification,
         aplicando los filtros dinámicos definidos por el usuario.*/
        List<Turn> results = turnRepository.findAll(TurnSpecification.filterBy(filter));

        /* Convierte cada entidad Turn obtenida de la base de datos en un objeto TurnDTO
        para devolver una lista apta para enviar al frontend.*/
        return results.stream()
                .map(TurnMapper::toDTO) // Aplica la conversión entidad -> DTO
                .collect(Collectors.toList()); // Recolecta todo en una lista
    }





    //public List<TurnDTO> createTurnsByUsers(List<Long> userIds, TurnDTO turnData) {
        //List<Turn> turns = new ArrayList<>();

        //for (Long userId : userIds) {
           // UserDTO user = userService.getUserById(userId);

            //Turn turn = TurnMapper.toEntity(turnData);
            //turn.setUserId(userId);
            //turn.setUserName(user.getUserName());
            // Aquí tendrías que definir cómo asignar groupId si es necesario
            //turns.add(turnRepository.save(turn));
        //}

        //return turns.stream().map(TurnMapper::toDTO).collect(Collectors.toList());
    //}
    public List<TurnDTO> findAllDTOs() {
        Iterable<Turn> iterable = turnRepository.findAll();
        List<Turn> turns = new ArrayList<>();
        iterable.forEach(turns::add);
        return turns.stream().map(TurnMapper::toDTO).toList();
    }

    public void deleteById(Long id) {
        turnRepository.deleteById(id);
    }
}
