export const BIZ_MENUS = [
  {
    fixedColumns: 0,
    hiddenFlag: false,
    pagination: false,
    name: 'MASTER',
    rank: 100,
    menuType: 'MENU',
    category: 'STANDARD',
    childrens: [
      {
        idField: 'id',
        hiddenFlag: false,
        titleField: 'name',
        itemsProp: 'items',
        totalProp: 'total',
        resourceUrl: 'companies',
        gridSaveUrl: 'companies/update_multiple',
        routingType: 'RESOURCE',
        name: 'Company',
        rank: 100,
        menuType: 'SCREEN',
        category: 'STANDARD'
      },
      {
        idField: 'id',
        hiddenFlag: false,
        titleField: 'name',
        itemsProp: 'items',
        totalProp: 'total',
        resourceUrl: 'bizplaces',
        gridSaveUrl: 'bizplaces/update_multiple',
        routingType: 'RESOURCE',
        name: 'Biz Place',
        rank: 200,
        menuType: 'SCREEN',
        category: 'STANDARD'
      },
      {
        idField: 'id',
        hiddenFlag: false,
        titleField: 'name',
        itemsProp: 'items',
        totalProp: 'total',
        resourceUrl: 'customers',
        gridSaveUrl: 'customers/update_multiple',
        routingType: 'RESOURCE',
        name: 'Customer',
        rank: 300,
        menuType: 'SCREEN',
        category: 'STANDARD'
      },
      {
        idField: 'id',
        hiddenFlag: false,
        titleField: 'name',
        itemsProp: 'items',
        totalProp: 'total',
        resourceUrl: 'vendors',
        gridSaveUrl: 'vendors/update_multiple',
        routingType: 'RESOURCE',
        name: 'Vendor',
        rank: 400,
        menuType: 'SCREEN',
        category: 'STANDARD'
      },
      {
        idField: 'id',
        hiddenFlag: false,
        titleField: 'name',
        itemsProp: 'items',
        totalProp: 'total',
        resourceUrl: 'contactpoints',
        gridSaveUrl: 'contactpoints/update_multiple',
        routingType: 'RESOURCE',
        name: 'Contact Point',
        rank: 200,
        menuType: 'SCREEN',
        category: 'STANDARD'
      }
    ]
  }
]
