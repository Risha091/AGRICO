import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

function ShoppingOrders(){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Order Histpry</CardTitle>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                Order Id
                            </TableHead>
                            <TableHead>
                                Order date
                            </TableHead>
                            <TableHead>
                                Order Status
                            </TableHead>
                            <TableHead>
                                Order price
                            </TableHead>
                            <TableHead>
                                <span className="sr-only">Details</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                            <TableCell>123456</TableCell>
                            <TableCell>27/01/25</TableCell>
                            <TableCell>In Process</TableCell>
                            <TableCell>$1000</TableCell>
                            <TableCell>
                                <Button>View Details</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
export default ShoppingOrders;