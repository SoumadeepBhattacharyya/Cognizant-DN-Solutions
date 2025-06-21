public class ForecastTest {
    public static void main(String[] args) {
        double presentValue = 10000;     
        double growthRate = 0.08;        
        int years = 5;

        double futureValue = FinancialForecast.forecast(presentValue, growthRate, years);
        System.out.printf("Future value after %d years: Rs.%.2f\n", years, futureValue);

        System.out.println("\nTime Complexity:");
        System.out.println("Recursive forecast: O(n) because each call decreases the year count by 1");
        System.out.println("Optimized recursion (tail recursion): also O(n) but easier to convert to iterative");
    }
}
