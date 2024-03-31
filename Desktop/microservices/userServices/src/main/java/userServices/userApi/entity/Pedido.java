package userServices.userApi.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "pedidos")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
    private LocalDateTime fechaPedido;
    @Enumerated(EnumType.STRING)
    private EstadoPedido estado;
    @OneToMany(mappedBy = "pedido")
    private List<ItemPedido> items;
    @OneToOne(mappedBy = "pedido")
    private Pago pago;
    @OneToOne(mappedBy = "pedido")
    private DetalleEnvio detalleEnvio;
}
