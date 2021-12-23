import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}

export function PaginationItem({
    isCurrent = false,
    number,
    onPageChange
}: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                w="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        );
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            w="4"
            colorScheme="pink"
            bg="gray.700"
            _hover={{
                bg: 'gray.500',
            }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    );
}