package com.example.jaki.myapplication;

import android.content.Intent;
import android.os.Build;
import android.provider.Settings;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MotionEvent;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity  {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        TextView text = (TextView) findViewById(R.id.textView);
        final MainActivity self = this;
        text.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                if (event.getAction() == MotionEvent.ACTION_UP){
                    if (Build.VERSION.SDK_INT >= 23) {
                        if(!Settings.canDrawOverlays(self)) {
                            Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
                            startActivity(intent);
                        } else {
                            //绘ui代码, 这里说明6.0系统已经有权限了
                            Intent intent = new Intent(MainActivity.this,RNActivity.class);
                            startActivity(intent);
                        }
                    } else {
                        //绘ui代码,这里android6.0以下的系统直接绘出即可
                        Intent intent = new Intent(MainActivity.this,RNActivity.class);
                        startActivity(intent);
                    }
                }
                return  true;
            }
        });
    }
}
