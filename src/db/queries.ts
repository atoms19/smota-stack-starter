/*
export async function createCase(data:insertCase){
    await db.insert(casesTable).values(data)
}


// getters
export async function geUser(query:SelectPatient['']{
    return db.select().from(patientsTable).where(or(ilike(patientsTable.name,'%'+query+'%'),like(patientsTable.phone,'%'+query+'%'))).limit(9).offset((page-1)*9)
}
*/