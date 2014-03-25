//
//  UIAMasterViewController.h
//  TestUIA
//
//  Created by Vitaliy Obertinskiy on 3/25/14.
//  Copyright (c) 2014 Vitaliy Obertinskiy. All rights reserved.
//

#import <UIKit/UIKit.h>

@class UIADetailViewController;

#import <CoreData/CoreData.h>

@interface UIAMasterViewController : UITableViewController <NSFetchedResultsControllerDelegate>

@property (strong, nonatomic) UIADetailViewController *detailViewController;

@property (strong, nonatomic) NSFetchedResultsController *fetchedResultsController;
@property (strong, nonatomic) NSManagedObjectContext *managedObjectContext;

@end
