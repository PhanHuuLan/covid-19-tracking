import React,{ useContext } from 'react'
import { 
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    makeStyles 
} from '@material-ui/core'

const TopTenList = ({ data,type }) => {
    const useStyle = makeStyles({
        title: (props) => ({
            textAlign: 'left',
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'Roboto,san-serif',
            marginBottom: '10px',
        }),
        number: (props) => ({
            textAlign: 'right',
            '& span': {
                fontSize: '14px',
            }
        }),
        itemWrapper: (props) => ({
            marginBottom: '10px',
            borderRadius: '0px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }),
        fixFlag: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'initial',
        },
        text: (props) => ({
            marginTop: '5px',
            '& span': {
                fontSize: '14px',
              },
        }),
        flag: {
            borderRadius: '0px',
        },
        flagWrapper: {
            minWidth: '40px',
        }
    })
    const sortedDataByCases = data.sort((a,b) =>( b[type] - a[type] ))
    const createData = ( name,type,flag ) => {
        return { name, type, flag };
    }
    const list = []
    if (sortedDataByCases.length > 0) {
      for (var i=0;i<10;i++) {
        list.push(createData(
                sortedDataByCases[i].country, 
                sortedDataByCases[i][type], 
                sortedDataByCases[i].countryInfo.flag,
            ))
      }
    }
    let title = ''
    switch(type){
        case 'cases': 
            title = 'Top Cases'
            break;
        case 'todayCases':
            title = 'Today Cases'
            break;
        case 'deaths': 
            title = 'Top Deaths'
            break;
        case 'todayDeaths': 
            title = 'Today Deaths'
            break;
        case 'active': 
            title = 'Top Active'
            break;
        case 'recovered': 
            title = 'Top Recovered'
            break;
        default: 
            title = ''
    }
    return (
        <Grid item xs={12} sm={4} md={2} style={{marginTop: 80}}>
            <List style={{ width: '100%',maxWidth:1184 }}>
                <Typography component="p" style={{marginLeft:30,fontSize:18,fontWeight:600,lineHeight:1.2,color:'#222',marginBottom:5}}>{title}</Typography>
                {
                        list.map((item,index) => {
                            console.log(item,index);
                            return (
                                <ListItem  key={index} >
                                    <Typography style={{minWidth:140,display:'block',maxHeight:87,fontSize:10,marginRight:60,marginTop:5,background: '#fff'}}>
                                        <Typography style={{display: 'flex',justifyItems:'center',alignContent:'center',paddingTop:15,paddingLeft:10}}>
                                            <ListItemAvatar >
                                            <Avatar variant={"rounded"} alt="logo" src={item.flag} style={{
                                                width: 40,
                                                height: 30,
                                            }}/>
                                            </ListItemAvatar>
                                            <ListItemText primary={item.type}/>
                                        </Typography>
                                        <ListItemText primary={item.name} style={{marginLeft:10}}/>

                                    </Typography>
                                </ListItem>
                            )     
                        })
                }
            </List>
        </Grid>

    )
}

export default React.memo(TopTenList)