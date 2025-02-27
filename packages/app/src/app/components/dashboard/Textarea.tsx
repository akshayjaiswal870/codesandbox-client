import React, { TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Stack } from '@codesandbox/components';
import { Label } from './Label';

const StyledTextarea = styled.textarea`
  padding: 12px 16px;
  background-color: #2a2a2a;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #e5e5e5;
  line-height: 24px;
  border: none;
  border-radius: 2px;

  &:hover {
    box-shadow: 0 0 0 2px #e5e5e51a;
  }

  &:focus {
    outline: 1px solid #ac9cff;
  }
`;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  name: string;
}

export const Textarea = ({ id, label, name, ...restProps }: TextareaProps) => (
  <Stack gap={2} direction="vertical">
    <Label htmlFor={id}>{label}</Label>
    <StyledTextarea id={id} name={name} {...restProps} />
  </Stack>
);
