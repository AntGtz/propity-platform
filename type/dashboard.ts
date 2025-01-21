export type CommissionScheme = {
    id: string;
    name: string;
    percents: Record<string, number>;
};

export type CommissionData = Array<CommissionScheme>;

export type CommissionTableData = {
    id: string;
    name: string;
    value: string | number;
};