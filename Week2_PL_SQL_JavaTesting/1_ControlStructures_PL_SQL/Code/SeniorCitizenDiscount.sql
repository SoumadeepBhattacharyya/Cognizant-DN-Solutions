BEGIN
    FOR rec IN (SELECT customer_id, age, interest_rate FROM customers) LOOP
        IF rec.age > 60 THEN
            UPDATE customers
            SET interest_rate = interest_rate - (interest_rate * 0.01)
            WHERE customer_id = rec.customer_id;
        END IF;
    END LOOP;
    COMMIT;
END;
/
