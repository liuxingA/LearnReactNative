//
//  ViewController.m
//  ReactNativeModule
//
//  Created by jaki on 2017/9/20.
//  Copyright © 2017年 jaki. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    UIButton * button = [UIButton buttonWithType:UIButtonTypeSystem];
    [button setTitle:@"Hello RN" forState:UIControlStateNormal];
    button.frame = CGRectMake(self.view.frame.size.width/2-50, 200, 100, 30);
    [self.view addSubview:button];
    [button addTarget:self action:@selector(gotoRN) forControlEvents:UIControlEventTouchUpInside];
}


-(void)gotoRN{
    //创建ReactNative模块本地地址
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    //创建ReactNative视图
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"ReactNativeModule"
                         initialProperties : nil
                         launchOptions     : nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
