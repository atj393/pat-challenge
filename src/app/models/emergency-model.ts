export interface EmergencyModel {
    emergency: {
        emergencyId: String;
        requestTime: String;
    },
    device: {
        serialNumber: String;
    },
    holder: {
        firstName: String;
        lastName: String
        fullName: String;
    },
}
