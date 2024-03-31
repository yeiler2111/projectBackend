package userServices.userApi.repositories;
import org.springframework.stereotype.Repository;

import userServices.userApi.entity.Product;

@Repository
public class ClienteRepository extends JpaRepository<Product, Long> {
    // List<Product> findByNombreContainingIgnoreCase(String searchTerm);
    // List<Product> findByStockGreaterThan(Integer stock);
    // List<Product> findByPrecioLessThanAndStockGreaterThan(Long precio, Integer stock);
}
