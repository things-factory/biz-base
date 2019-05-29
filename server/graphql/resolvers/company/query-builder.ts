export const conditionBuilder = function(fieldName: string, operator: string, value: any) {
  switch (operator) {
    case 'eq':
      return {
        clause: `${fieldName} = :arg`,
        parameters: { arg: value }
      }

    case 'contains':
      return {
        clause: `${fieldName} LIKE :arg`,
        parameters: { arg: `%${value}%` }
      }

    case 'lt':
      return {
        clause: `${fieldName} < :arg`,
        parameters: { arg: value }
      }

    case 'gt':
      return {
        clause: `${fieldName} > :arg`,
        parameters: { arg: value }
      }

    case 'lte':
      return {
        clause: `${fieldName} <= :arg`,
        parameters: { arg: value }
      }

    case 'gte':
      return {
        clause: `${fieldName} >= :arg`,
        parameters: { arg: value }
      }
  }
}
