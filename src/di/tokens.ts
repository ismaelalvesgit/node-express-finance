export const tokens = { 
    Config: Symbol("Config"),
    Routes: Symbol("Routes"),
    RepositoryBase: Symbol("RepositoryBase"),
    RedisClient: Symbol("RedisClient"),
    ApmClient: Symbol("ApmClient"),
    KafkaClient: Symbol("KafkaClient"),
    SystemRouter: Symbol("SystemRouter"),
    HealthcheckController: Symbol("HealthcheckController"),
    SystemService: Symbol("SystemService"),
    SystemRepository: Symbol("SystemRepository"),
    InvestRepository: Symbol("InvestRepository"),

    BrokerRouter: Symbol("BrokerRouter"),
    FindByIdBrokerController: Symbol("FindByIdBrokerController"),
    FindAllBrokerController: Symbol("FindAllBrokerController"),
    CreateBrokerController: Symbol("CreateBrokerController"),
    DeleteBrokerController: Symbol("DeleteBrokerController"),
    UpdateBrokerController: Symbol("UpdateBrokerController"),
    BrokerRepository: Symbol("BrokerRepository"),
    BrokerService: Symbol("BrokerService"),

    CategoryRouter: Symbol("CategoryRouter"),
    FindByIdCategoryController: Symbol("FindByIdCategoryController"),
    FindAllCategoryController: Symbol("FindAllCategoryController"),
    CategoryRepository: Symbol("CategoryRepository"),
    CategoryService: Symbol("CategoryService"),

    EventsRouter: Symbol("EventsRouter"),
    FindByIdEventsController: Symbol("FindByIdEventsController"),
    FindAllEventsController: Symbol("FindAllEventsController"),
    BatchCreateEventsController: Symbol("BatchCreateEventsController"),
    EventsRepository: Symbol("EventsRepository"),
    EventsService: Symbol("EventsService"),

    DividendsRouter: Symbol("DividendsRouter"),
    FindByIdDividendsController: Symbol("FindByIdDividendsController"),
    FindAllDividendsController: Symbol("FindAllDividendsController"),
    PaidDividendsController: Symbol("PaidDividendsController"),
    AutoCreateDividendsController: Symbol("AutoCreateDividendsController"),
    CreateDividendsController: Symbol("CreateDividendsController"),
    DeleteDividendsController: Symbol("DeleteDividendsController"),
    UpdateDividendsController: Symbol("UpdateDividendsController"),
    DividendsRepository: Symbol("DividendsRepository"),
    DividendsService: Symbol("DividendsService"),

    InvestmentRouter: Symbol("InvestmentRouter"),
    FindByIdInvestmentController: Symbol("FindByIdInvestmentController"),
    FindAllInvestmentController: Symbol("FindAllInvestmentController"),
    CreateInvestmentController: Symbol("CreateInvestmentController"),
    DeleteInvestmentController: Symbol("DeleteInvestmentController"),
    UpdateInvestmentController: Symbol("UpdateInvestmentController"),
    BatchUpdateInvestmentController: Symbol("BatchUpdateInvestmentController"),
    SyncBalanceInvestmentController: Symbol("SyncBalanceInvestmentController"),
    InvestmentViewRepository: Symbol("InvestmentViewRepository"),
    InvestmentRepository: Symbol("InvestmentRepository"),
    InvestmentService: Symbol("InvestmentService"),

    TransactionRouter: Symbol("TransactionRouter"),
    FindByIdTransactionController: Symbol("FindByIdTransactionController"),
    FindAllTransactionController: Symbol("FindAllTransactionController"),
    EventTransactionController: Symbol("EventTransactionController"),
    CreateTransactionController: Symbol("CreateTransactionController"),
    DeleteTransactionController: Symbol("DeleteTransactionController"),
    UpdateTransactionController: Symbol("UpdateTransactionController"),
    BatchUpdateTransactionController: Symbol("BatchUpdateTransactionController"),
    TransactionRepository: Symbol("TransactionRepository"),
    TransactionService: Symbol("TransactionService"),
};