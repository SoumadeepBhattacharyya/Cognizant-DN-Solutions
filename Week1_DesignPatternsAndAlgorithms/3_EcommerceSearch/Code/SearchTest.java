public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(103, "Laptop", "Electronics"),
            new Product(101, "Shoes", "Fashion"),
            new Product(105, "Watch", "Accessories"),
            new Product(102, "Phone", "Electronics"),
            new Product(104, "Bag", "Travel")
        };

        int targetId = 105;

        
        int indexLinear = SearchAlgorithms.linearSearch(products, targetId);
        if (indexLinear != -1) {
            System.out.println("Linear Search: Found " + products[indexLinear]);
        } else {
            System.out.println("Linear Search: Product not found.");
        }

        
        SearchAlgorithms.sortProductsById(products);

        // Binary Search Test
        int indexBinary = SearchAlgorithms.binarySearch(products, targetId);
        if (indexBinary != -1) {
            System.out.println("Binary Search: Found " + products[indexBinary]);
        } else {
            System.out.println("Binary Search: Product not found.");
        }

        System.out.println("\nTime Complexity:");
        System.out.println("Linear Search: O(n)");
        System.out.println("Binary Search: O(log n)");
    }
}
