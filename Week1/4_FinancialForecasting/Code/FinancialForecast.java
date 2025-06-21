public class FinancialForecast {

    
    public static double forecast(double amount, double rate, int years) {
        if (years == 0) {
            return amount;
        }
        return forecast(amount, rate, years - 1) * (1 + rate);
    }

    
    public static double forecastOptimized(double amount, double rate, int years) {
        return forecastHelper(amount, rate, years);
    }

    private static double forecastHelper(double amount, double rate, int years) {
        if (years == 0) return amount;
        return forecastHelper(amount * (1 + rate), rate, years - 1);
    }
}
