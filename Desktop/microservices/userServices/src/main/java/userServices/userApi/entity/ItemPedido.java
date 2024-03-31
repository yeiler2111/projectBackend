package userServices.userApi.entity;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "itemPedido")
public class ItemPedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;
    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Product producto;
    private Integer cantidad;
    private long precioUnitario;
}
