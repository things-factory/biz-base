export const conditionBuilder = function(fieldName: string, operator: string, value: any) {
  switch (operator) {
    case 'eq':
      return {
        clause: `${fieldName} = :${fieldName}`,
        parameters: { [fieldName]: value }
      }

    case 'contains':
      return {
        clause: `${fieldName} LIKE :${fieldName}`,
        parameters: { [fieldName]: `%${value}%` }
      }

    case 'lt':
      return {
        clause: `${fieldName} < :${fieldName}`,
        parameters: { [fieldName]: value }
      }

    case 'gt':
      return {
        clause: `${fieldName} > :${fieldName}`,
        parameters: { [fieldName]: value }
      }

    case 'lte':
      return {
        clause: `${fieldName} <= :${fieldName}`,
        parameters: { [fieldName]: value }
      }

    case 'gte':
      return {
        clause: `${fieldName} >= :${fieldName}`,
        parameters: { [fieldName]: value }
      }
  }
}
