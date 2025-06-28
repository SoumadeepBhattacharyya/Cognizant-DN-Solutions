package com.example;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import org.junit.Test;

public class AppTest {

    @Test
    public void testAddition() {
        assertEquals(5, 2 + 3);
    }

    @Test
    public void testStringNotNull() {
        String name = "Cognizant";
        assertNotNull(name);
    }
}
