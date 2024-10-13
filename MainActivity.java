package com.qdefassist;

import android.app.Activity;
import android.os.Bundle;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}package com.qdefassist; // Declares the package

import android.app.Activity; // Imports the Activity class
import android.os.Bundle;   // Imports the Bundle class

public class MainActivity extends Activity { // Defines the MainActivity class, inheriting from Activity

    @Override // Annotation indicating that this method overrides a method from the parent class
    protected void onCreate(Bundle savedInstanceState) { // The onCreate method is called when the activity is created
        super.onCreate(savedInstanceState); // Calls the onCreate method of the parent class (Activity)
        setContentView(R.layout.activity_main); // Sets the content view of the activity to the layout defined in activity_main.xml
    }
}import androidx.appcompat.app.AppCompatActivity; // Import AppCompatActivity

public class MainActivity extends AppCompatActivity { // Extend AppCompatActivity
    // ...
}