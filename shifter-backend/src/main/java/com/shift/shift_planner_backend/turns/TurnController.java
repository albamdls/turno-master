package com.shift.shift_planner_backend.turns;


import com.shift.shift_planner_backend.turns.model.TurnFilterDTO;
import com.shift.shift_planner_backend.turns.model.TurnDTO;
import com.shift.shift_planner_backend.turns.model.TurnoMasivoDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// import com.shift.shift_planner_backend.turns.model.TurnFilterDTO;
import com.shift.shift_planner_backend.turns.model.TurnDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador REST para gestionar endpoints relacionados con turnos.
 * Incluye operaciones CRUD, filtrado y creación masiva.
 */
@RestController
@RequestMapping("api")
public class TurnController {

    private final TurnService turnService;

    TurnController (TurnService turnService) {this.turnService=turnService;}

    @PostMapping("/turn")
    public ResponseEntity<TurnDTO> createTurn(@RequestBody TurnDTO createTurnDTO) {

        return ResponseEntity.ok(turnService.createTurn(createTurnDTO));
    }

    @PostMapping("/turns/filter")
    public ResponseEntity<List<TurnDTO>> filterTurns(@RequestBody TurnFilterDTO filter) {
        List<TurnDTO> result = turnService.filterTurns(filter);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/turns/masivo")
    public ResponseEntity<List<TurnDTO>> crearTurnosMasivos(@RequestBody TurnoMasivoDTO dto) {
        return ResponseEntity.ok(turnService.crearTurnosMasivos(dto));
    }

    @DeleteMapping("/turns/delete")
    public ResponseEntity<String> deleteTurns(@RequestBody TurnFilterDTO filter) {
        turnService.deleteTurnsByFilter(filter);
        return ResponseEntity.ok("Turnos eliminados correctamente");
    }

    @DeleteMapping("/turns/all")
    public ResponseEntity<String> deleteAllTurns() {
        turnService.deleteAllTurns();
        return ResponseEntity.ok("Todos los turnos han sido eliminados");
    }

    @GetMapping("/turns/all")
    public List<TurnDTO> getAllTurns() {
        return turnService.findAllDTOs();
    }

    @DeleteMapping("/turns/{id}")
    public ResponseEntity<Void> deleteTurn(@PathVariable Long id) {
        turnService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}


