import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/LibraryAdd';
import FavoriteIcon from '@material-ui/icons/LibraryBooks';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
const styles = {
    card: {
        height: 100,
    },
    bottomNav : {
        marginTop: 20,
    }
};
const Navigation = ({classes}) =>{
    return(
        <Card className={classes.card}>
            <BottomNavigation showLabels className={classes.bottomNav}>
                <Link to="/addbook/">
                    <BottomNavigationAction className="svg_icons" label="Add book" icon={<RestoreIcon />} />
                </Link>
                <Link to="/allbooks/">
                    <BottomNavigationAction className="svg_icons" label="All books" icon={<FavoriteIcon />} />
                </Link>
            </BottomNavigation>
        </Card>

    )
}

export default withStyles(styles)(Navigation)