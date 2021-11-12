import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateLayout from '../Layout/PrivateLayout';
import PublicLayout from '../Layout/PublicLayout';
import Dashboard from '../Pages/Admin/Dashboard';
import BuscarUsu from '../Pages/Admin/Roles';
import Ventas from '../Pages/Admin/Ventas';
import Features from '../Pages/Public/Features';
import Index from '../Pages/Public/Index';
import RegistrarProducto from '../Pages/RegistrarProducto/RegistrarProducto';
import BuscarVenta from '../Pages/BuscarVenta/BuscarVenta';
//import BuscarUsu from '../Pages/BuscarUsu/BuscarUsu';
import Registro from '../Pages/Admin/Registro';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path={['/dash', '/Roles', '/ventas', '/RegistrarProducto', '/BuscarVenta']}>
                    <PrivateLayout>
                        <Switch>
                            <Route path='/dash'>
                                <Dashboard/>
                            </Route>
                            <Route path='/ventas'>
                                <Ventas />
                            </Route>
                            <Route path='/Roles'>
                                <BuscarUsu/>
                            </Route>
                            <Route path='/RegistrarProducto'>
                                <RegistrarProducto />
                            </Route>
                            <Route path='/BuscarVenta'>
                                <BuscarVenta />
                            </Route>
                            <Route path='/BuscarUsu'>
                                <BuscarUsu />
                            </Route>
                        </Switch>
                    </PrivateLayout>
                </Route>
                <Route path={['/features','/', '/Registro']}>
                    <PublicLayout>
                        <Switch>
                            <Route path='/features'>
                                <Features/>
                            </Route>
                            <Route path='/Registro'>
                                <Registro/>
                            </Route>
                            <Route path='/'>
                                <Index/>
                            </Route>
                        </Switch>
                    </PublicLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
