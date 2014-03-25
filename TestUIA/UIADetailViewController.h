//
//  UIADetailViewController.h
//  TestUIA
//
//  Created by Vitaliy Obertinskiy on 3/25/14.
//  Copyright (c) 2014 Vitaliy Obertinskiy. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UIADetailViewController : UIViewController <UISplitViewControllerDelegate>

@property (strong, nonatomic) id detailItem;

@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;
@end
