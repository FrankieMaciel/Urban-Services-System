import type { ReactElement } from 'react';
import React from 'react';
import { RequestE } from './entities';

export interface RequestComponentI {
    data: RequestE;
    isAdminMode?: boolean;
}

export interface InputComponentI {
    text: String;
    setState: (text: string) => void;
    newValue?: string;
    isDisabled?: boolean;
}

export interface ErrorMessageComponentI {
    text: String;
}